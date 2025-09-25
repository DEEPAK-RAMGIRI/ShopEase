from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import JSONResponse
import database
import re

app = FastAPI()

orders = {}

def track_order(parameters: dict):
    order_id = parameters['number']
    status = database.get_order_status(order_id)
    if status:
        fulfillmentText =  f"The order status for order id: {order_id} is: {status}"
    else:
        fulfillmentText = f"didn't found the order status {order_id}"
    return JSONResponse(content= {'fulfillmentText' : fulfillmentText})

def extract_session_id(session_str: str):
    match = re.search(r"/sessions/(.*?)/contexts/", session_str)
    if match:
        extracted_string = match.group(1)
        return extracted_string 
    return ""


def response_string(food_dictionary: dict):
    return ', '.join([f"{int(j)} {i}" for i,j in food_dictionary.items()])
# print(response_string({'biryani':2,'udon':10}))

def add_order(parameters:dict,session_id: str):
    fooditems = parameters['food-items']
    quantity = parameters['number']
    
    if len(fooditems) != len(quantity):
        fulfillment_text = "Sorry I didn't understand. Can you please specify food items and quantities clearly?"
    else:
        new_food = dict(zip(fooditems,quantity))
        
        if session_id in orders: orders[session_id].update(new_food)
        else: orders[session_id] = new_food
        
        order_str = response_string(orders[session_id])
        fulfillment_text = f"So far you have: {order_str}. Do you need anything else?"
    
    return JSONResponse(content={ "fulfillmentText": fulfillment_text} )

def save_to_database(order:dict):
    order_id = database.get_next_order_id()
    
    for i,j in order.items():
        db = database.insert_order_item(i,j,order_id)
        if db == -1: return - 1 #means error
    database.insert_order_tracking(order_id,"in progress")
    return order_id
        
def complete_order(parameters:dict,session_id:str):
    if session_id not in orders:
        fulfillment_text = "I'm having a trouble finding your order. Sorry! Can you place a new order please?😔"
    else:
        order = orders[session_id]
        order_id = save_to_database(order)
        if order_id == -1:
            fulfillment_text = "Sorry, I couldn't process your order due to a backend error. " \
                            "Please place a new order again"
        else:
            order_total = database.get_total_order_price(order_id)
            fulfillment_text = f"Awesome. We have placed your order. " \
                        f"Here is your order id # {order_id}. " \
                        f"Your order total is {order_total} which you can pay at the time of delivery!"
        del orders[session_id]
    return JSONResponse(content={  
        "fulfillmentText": fulfillment_text
    })
    
    
def remove_order(parameters:dict,session_id:str):
    if session_id not in orders:
        return JSONResponse(content={"fulfillmentText" : "I'm having a trouble finding your order. Sorry! Can you place a new order please?😔"})    
        
    food_items = parameters["food-items"]
    current_order = orders[session_id]

    removed_items = []
    no_such_items = []
    fulfillment_text = ""

    for item in food_items:
        if item not in current_order:
            no_such_items.append(item)
        else:
            removed_items.append(item)
            del current_order[item]

    if len(removed_items) > 0:
        fulfillment_text = f'Removed {",".join(removed_items)} from your order!'

    if len(no_such_items) > 0:
        fulfillment_text = f' Your current order does not have {",".join(no_such_items)}'

    if len(current_order.keys()) == 0:
        fulfillment_text += " Your order is empty!"
    else:
        order_str = response_string(current_order)
        fulfillment_text += f" Here is what is left in your order: {order_str}"

    return JSONResponse(content={
        "fulfillmentText": fulfillment_text
    })
        
        
@app.post("/")
async def handle_request(request: Request): 
    # Retrieve the JSON data from the request
    payload = await request.json()

    # Extract the necessary information from the payload
    # based on the structure of the WebhookRequest from Dialogflow
    intent = payload['queryResult']['intent']['displayName']
    parameters = payload['queryResult']['parameters']
    output_contexts = payload['queryResult']['outputContexts']
    session_id = extract_session_id(output_contexts[0]["name"])
    
    intent_handler = {
        'order.add': add_order,
        'order.remove': remove_order,
        'order.complete': complete_order,
        'track.order:ongoing-tracking': track_order
    }
    return intent_handler[intent](parameters, session_id)


def track_order(parameters: dict,session_id :str):
    order_id = parameters['number']
    order_status = database.get_order_status(order_id)
    if order_status:
        fulfillment_text = f"The order status for order id: {order_id} is: {order_status}"
    else:   
        fulfillment_text = f"No order found with order id: {order_id}"

    return JSONResponse(content={
        "fulfillmentText": fulfillment_text
    })
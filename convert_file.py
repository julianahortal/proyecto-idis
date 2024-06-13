import pandas as pd
import json

def excel_to_json(excel_path, json_path):
    # Load the Excel file
    df = pd.read_excel(excel_path)
    
    # Replace single backslashes with double backslashes in the 'Value.post.guid' and 'Value.post.image' columns
    df['Value.post.guid'] = df['Value.post.guid'].str.replace('\\', '\\\\', regex=False)
    df['Value.post.image'] = df['Value.post.image'].str.replace('\\', '\\\\', regex=False)
    
    # Convert DataFrame to JSON and save to file
    df.to_json(json_path, orient='records', lines=False)
    


# Example usage
excel_path = '/Users/marcosf2/Documents/playground/ayudando_juli/my-app/PROYECTO IDIS (1).xlsx'
json_path = '/Users/marcosf2/Documents/playground/ayudando_juli/my-app/data.json'
excel_to_json(excel_path, json_path)
import requests
import pandas as pd
from google.cloud import storage

def fetch_player_stats(player_id, season):
    url = f"https://statsapi.mlb.com/api/v1/people/{player_id}/stats/game"
    params = {"season": season}
    response = requests.get(url, params=params)
    data = response.json()
    return pd.DataFrame(data['stats'])

def preprocess_data(df):
    df.fillna(method='ffill', inplace=True)
    return df

def upload_to_gcs(bucket_name, destination_blob_name, source_file_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(source_file_name)

# Example usage
player_stats = fetch_player_stats('player_id', '2022')
cleaned_stats = preprocess_data(player_stats)
cleaned_stats.to_csv('cleaned_stats.csv')
upload_to_gcs('your-bucket-name', 'cleaned_stats.csv', 'cleaned_stats.csv')

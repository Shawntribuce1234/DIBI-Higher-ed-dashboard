import pandas as pd
from sqlalchemy import create_engine, text
from sqlalchemy import URL
import pyodbc
import os
from dotenv import load_dotenv


df = pd.read_csv("researchers.csv")

df.rename(columns = {'email' : 'Email', 'university type' : 'university_type','dibi pillar' : 'Dibi_Pillar' , 'expertise categories' : 'Expertise_categories',
                    'bio link' : 'Bio_Link', 'key terms' : 'Key_terms', 'other tags' : 'Other_tags', 'city' : 'City', 'State' : 'State_',
                    'country' : 'Country', 'Location based research in' : 'Location', 'self identified expertise areas' : 'Self_identified_expertise',
                    'phone number':'Phone_Number', 'may 9 comment':'May_9th', 'bio link button':'BIO', 'uni link': 'Link', 'related sites': 'Related_Sites'}, 
                    inplace=True)

# Data Validation before loading into SQL
missing_columns = df.isna().sum()
duplicates = df.duplicated().sum()
max_string = df["Name"].str.len().max()
print(f'Lenght of max string is: \n{df.apply(lambda column : column.str.len().max())}')
print(f"Missing columsn : {missing_columns}, Duplicates: {duplicates}, Max sting length is: {max_string}")

load_dotenv() 

server = os.getenv("DB_SERVER")
name = os.getenv("DB_NAME")
username = os.getenv("DB_USER")
password = os.getenv("DB_PASSWORD")


#dialect+driver://username:password@host:port/database
connectionURL = URL.create(drivername='mssql+pyodbc',
                 username=username,
                 password=password,
                 query ={"driver": "ODBC Driver 18 for SQL Server"},
                 host=server,
                 database=name)

engine = create_engine(connectionURL)

print(df.to_sql(name='researchers', con=engine, if_exists='append', index=False))

with engine.connect() as connection:
    result = connection.execute(text("SELECT COUNT(*) FROM researchers"))
    print(result.scalar())



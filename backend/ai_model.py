from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
import numpy as np
import joblib

#Training data
data = [
    ("Multiple failed login attempts from admin", "brute_force", "high"),
    ("SQL injection attempt in search field: SELECT * FROM users", "sql_injection", "critical"),
    ("Unauthorized access to /etc/passwd", "file_access", "critical"),
    ("Normal user login successful", "info", "low"),
    ("Port scanning detected from 192.168.1.50", "reconnaissance", "medium"),
]

texts, types, severities = zip(data)

#Create a pipeline: Text > Vector > Classifier
model_type = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', RandomForestClassifier())
])

model_severity = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', RandomForestClassifier())
])

#Training
model_type.fit(texts, types)
model_severity.fit(texts, severities)

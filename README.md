# api-sts

endpoints
/token
body:
{
    "client_id":"UUID id",
    "client_secret": "UUID secret"
}
response
{
    "access_token": "TOKEN value"
}
/token_info
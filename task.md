Hello Heera,

Please find the below Task-


Task:  Create an API to perform authenticated CRUD on categories & services.

Requirements:
- Create an API for JWT token-based login.
- Create an API to perform Create/Read/Update/Delete on category.
- Create an API to Create/Read/Update/Delete services in the category.
- Document all the API on Postman.

- We are only able to login with credentials-
    Email: admin@codesfortomorrow.com
    Password: Admin123!@#
- Except login, all API should only work valid JWT tokens on header.

- Create an API to add categories as per the Category Schema.
    POST /category
- Create an API to get a list of all categories.
     GET /categories
- Create an API to update a single category as per the schema.
    PUT /category/:categoryId
- Create an API to remove empty(With no services) category only.
     DELETE /category/:categoryId
- Create an API to add services as per the Service Schema.
    POST /category/:categoryId/service
- Create an API to get a list of all services inside any category.
    GET /category/:categoryId/services
- Create an API to remove service from category.
    DELETE /category/:categoryId/service/:serviceId
- Create an API to update service as per the service schema.
    PUT /category/:categoryId/service/:serviceId
- We are able to add/remove/update price options of any service while updating using the above API.

Schema:-
- Category Schema:
·     Category name

- Service Schema:
·     Category ID
·     Service Name
·     Type  (Note - Possible Options are Normal, VIP)
·     Price Options (Note - Service can have multiple price option)
* See below schema to save multiple price options of service in separate table

- Service Price Options Schema:
·     Service ID
·     Duration
·     Price
·     Type  (Note - Possible Options are Hourly, Weekly, Monthl)

Guidelines:
- You can use any library to build UI components.
- Should have clean code & structure.
- Naming of components & variables should be appropriate.
- You can use only relational databases like Mysql, Postgresql, or any other.


Note: once you are done with your code. please create an open repo on Github and push your code on the repo and revert the repo link on the same email and  Add everyone cc who is currently in cc then you can disconnect and HR will update your result.

Thanks & Regards
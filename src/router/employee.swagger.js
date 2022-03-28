/
  @swagger
   components:
     schemas:
       Employee:
         type: object
         required:
           - firstName
           - lastName
         properties:
           id:
             type: integer
             description: The auto-generated id of the Employee.
           firstName:
             type: string
             description: The employees first name.
           lastName:
             type: string
             description: The employees last name.
           email:
             type: string
             description: The employees email address.
           phone:
             type: string
             description: The employees phone number.
           company:
             type: integer
             description: The employees company id.
 /
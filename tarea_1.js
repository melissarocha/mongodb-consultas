// 1. Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:
$ mongoimport -d students -c grades < grades.json
/* Respuesta:
  2018-04-05T09:48:57.688-0600	connected to: localhost
  2018-04-05T09:48:57.773-0600	imported 800 documents
*/

// 2. ¿Cuantos registros arrojo el comando count?
> db.grades.count()
// Respuesta: 800

// 3. Encuentra todas las calificaciones del estudiante con el id numero 4
> db.grades.find({"student_id": 4}).pretty()
/* Respuesta:
  {
  	"_id" : ObjectId("50906d7fa3c412bb040eb587"),
  	"student_id" : 4,
  	"type" : "exam",
  	"score" : 87.89071881934647
  }
  {
  	"_id" : ObjectId("50906d7fa3c412bb040eb589"),
  	"student_id" : 4,
  	"type" : "homework",
  	"score" : 5.244452510818443
  }
  {
  	"_id" : ObjectId("50906d7fa3c412bb040eb58a"),
  	"student_id" : 4,
  	"type" : "homework",
  	"score" : 28.656451042441
  }
  {
  	"_id" : ObjectId("50906d7fa3c412bb040eb588"),
  	"student_id" : 4,
  	"type" : "quiz",
  	"score" : 27.29006335059361
  }
*/

// 4. ¿Cuantos registros hay de tipo exam?
> db.grades.find({"type": "exam"}).count()
// Respuesta: 200

// 5. ¿Cuantos registros hay de tipo homework?
> db.grades.find({"type": "homework"}).count()
//Respuesta: 400

// 6. ¿Cuantos registros hay de tipo quiz?
> db.grades.find({"type": "quiz"}).count()
//Respuesta: 200

// 7. Elimina todas las calificaciones del estudiante con el id numero 3
> db.grades.remove({"student_id": 3})
// Respuesta: WriteResult({ "nRemoved" : 4 })

// 8. ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
> db.grades.find({"score": 75.29561445722392, "type": "homework"}).pretty()
/* Respuesta:
  {
  	"_id" : ObjectId("50906d7fa3c412bb040eb59e"),
  	"student_id" : 9,
  	"type" : "homework",
  	"score" : 75.29561445722392
  }
*/

// 9. Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
> db.grades.update({_id : ObjectId("50906d7fa3c412bb040eb591")}, {$set: {"score": 100}})
/* Respuesta: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  {
  "_id" : ObjectId("50906d7fa3c412bb040eb591"),
  "student_id" : 6,
  "type" : "homework",
  "score" : 100
  }
*/

// 10. A que estudiante pertenece esta calificación.

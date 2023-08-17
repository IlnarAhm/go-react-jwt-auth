package main

import (
	"go-react-jwt-auth/database"
	"go-react-jwt-auth/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowOrigins:     "http://localhost:3000",
		AllowHeaders:     "Content-Type,Content-Length,Authorization,Accept,X-Requested-With",
	}))

	routes.Setup(app)

	if err := app.Listen(":8000"); err != nil {
		panic(err)
	}

}

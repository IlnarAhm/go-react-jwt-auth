package main

import (
	"go-react-jwt-auth/database"
	"go-react-jwt-auth/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	database.Connect()
	routes.Setup(app)

	if err := app.Listen(":3000"); err != nil {
		panic(err)
	}

}

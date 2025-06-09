# Caminhos dos projetos
FRONTEND_DIR=.
BACKEND_DIR=DonateFaith.Domain.Api

.PHONY: all start frontend backend

all: start

start:
	make -j 2 frontend backend

frontend:
	cd $(FRONTEND_DIR) && npm install && (npm run dev || npm start)

backend:
	cd $(BACKEND_DIR) && dotnet run

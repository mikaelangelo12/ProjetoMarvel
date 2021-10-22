include backEnd/.env

.PHONY: up

up:
	cd backEnd/&&docker-compose up -d

.PHONY: down

down:
	cd backEnd/&&docker-compose down

.PHONY: logs
logs:
	cd backEnd/&&docker-compose logs -f

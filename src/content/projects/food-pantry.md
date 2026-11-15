---
title: Food Pantry
summary: A microservices web app on Google Kubernetes Engine that suggests recipes from Trinity's food pantry; it helped grow donations by 50%.
date: 2024-01-15
endDate: 2024-04-30
tags: [Python, Flask, Docker, Kubernetes, GKE, SQL]
role: Team of 3
repo: https://github.com/lhchi04/Food-Pantry
featured: true
status: archived
---

## Overview

A web app for Trinity College's Food-n-Stuff Pantry. Students browse available ingredients, add them to a cart, and get recipes they can make. It served **1,000+ students and donors** and helped increase pantry donations by **50%**.

## Architecture

Four Python Flask microservices communicating over REST, each in its own Docker image and deployed to **Google Kubernetes Engine**:

- **Main** routes requests and manages the overall flow
- **User** handles registration, login and profiles
- **Pantry** lists available ingredients, backed by a SQL database for real-time inventory
- **Recipe** generates recipes from the cart using the Spoonacular API

Recipe suggestions based on users' carts boosted engagement by **40%**.

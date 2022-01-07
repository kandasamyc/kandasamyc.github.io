+++
title = "Scouting Data Ingest"
date = "2022-01-05T19:10:24-05:00"
dateRange = "2019 - Present"
author = "ksam"
authorTwitter = "" #do not include @
cover = ""
tags = ["python", "web-dev", "backend", "data-processing"]
keywords = []
description = "A python application to ingest data from multiple sources, validate, perform calculations on it, and then expose the resulting database."
showFullContent = false
readingTime = false
weight = 1
+++

## Summary

- Designing and engineering a solution to ingest and analyze robotics data from many sources in real-time
- Constructed and deployed a Python backend with Pandas and Numpy to AWS EC2
- Developed a REST API to interface a web app with a MySQL database hosted with AWS
- Built a web app interface using Flask and Bulma to view and interact with analyzed data

## Background

In high school, I participated in the [FIRST Robotics Competition](https://www.firstinspires.org/robotics/frc) (FRC). The competition consists of multiple matches where two alliances of 3 robots, each from different teams, compete. We wanted to collect data on each alliance's and {{< sidenote text="each team's" id="each-teams" >}} While an alliance loses or wins together, alliances are random and vary, so we want to focus on team specific information. {{</sidenote>}} performance to come up with a better strategy for each match.

Our goal was to design a tool to take data collected from our team members scouting matches and from [The Blue Alliance](https://www.thebluealliance.com), a data source that collection data per match, and validate, store, and perform calculations on it. We wanted to leave analysis to members while still performing calculations of certain metrics to provide other insights.

## Implementation

### Backend

The backend consists of a python application that is responsible for ingesting the data from multiple sources, validating data from one source against another, calculating common metrics and other performance metrics, and storing it in a external MySQL database. Numpy and Pandas were used to perform calculations and operations on the data and SQLAlchemy (specifically their ORM interface) was used to store and access data. 

For competitions, the backend is deployed to an AWS EC2 instance, and the database is hosted on AWS RDS.

### Frontend

In addition to the backend for data processing, a frontend was built to more easily input data, view data, and manage settings and configuration. 

Initially, scouts input data into a google form, and data was ingested from the connected sheet. However, we ran into issues with certain form fields not being efficient enough to input to. For example, tallying game pieces scored had to either be manually re-entered or the scout would have to hit small buttons. To fix this, I implemented our own form to improve the scouts' experience. 

To properly serve the frontend, an API was constructed with Flask and interfaces with the external database. The frontend also includes the capability to view data so that members can quickly look up statistics or other data points to build an effective strategy. Members can also adjust settings directly from the frontend interface as well.

## Links

- [GitHub](https://github.com/team4099/scouting-data-ingest)




# Hotel Manager

This is a react application to assist manage the bookings and guests in a hotel. Routing is performed with ReactRouter; styling is done with styled components; remote state is managed with React Query; UI state is managed with Context API; offers data persistence with Supabase.

![](assets/hotel-dashboard.png)
![](assets/hotel-bookings.png)

---

## Deployment

Deployed with Render:

https://hotel-manager.onrender.com

---

## Software Requirements Specification

### 1. Introduction

#### 1.1 Purpose

This manager was built to better learn and practice the React framework; and although it was not built with the expectation that it would be used by any institution, it certainly could find use in the hands of small businesses. 

#### 1.2 Scope

This application is not intended to compete with established business managers. It could, however, be a free alternative that will be of use to hotels that don't have a need for the countless features offered by the more well established alternatives. 

### 2. Overall Description

#### 2.1 Project Description

The application serves to manage everything about the hotel: bookings, cabins and guests. It is an internal application used by hotel employees to check in/out guests.

#### 2.1 Project Requirements

As a starting point to the development, business requirements were gathered. These requirements are shown below:

- Hotel employees need to be logged in to perform tasks;
- Only hotel employees can have accounts;
- Employees should be able to update their data;
- Employees should be able to create, read, update, or delete cabins and bookings;
- App should display informations about the cabins, bookings and guests;
- Booking data: arrival date, departure date, paid amount, number of guests, number of nights, observations, whether breakfast is booked, status;
- Bookings can be one of three statuses: checked in, checked out, or unconfirmed (booked but not checked in);
- Guest data: name, email, ID, nationality (including country flag);
- Dashboard should display data for the last 7, 30, or 90 days;
- Dashboard data: list of guest checking in/out that day, statistics (graphs);
- User should be able to choose between light or dark mode.

#### 2.2 Constraints, Assumptions and Dependencies

It is assumed that hotel employees won't need to create a booking from inside this app, it is expected that the clients will create the bookings from the client-facing application.

### 3. Requirements and Features

- The app must allow users to login to their account by entering email and password;
- The app must only allow users to create new users;
- The app must allow users to update and delete bookings' and cabins' data;
- The app must display a list of the bookings and a list of the cabins;

---

## Sample Data

The sample users are:

```
email: user@example.com
password: 123456
```

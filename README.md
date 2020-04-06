# Simple 'Сhat room' app

![Screenshot](https://user-images.githubusercontent.com/58704804/78592799-4e05b300-784e-11ea-98a7-40f98a3fc032.png)


## Features

+ Responsive Web Design
+ Check unavailable name
+ Validate name (name without special characters)
+ Save name in local storage
+ Break line available (Shift + Enter)
+ Validate and cleaning message before sending (from extra spaces and breaks lines)
+ Emoji available

## Notice

+ There can be several chat rooms at the same time
+ User can copy link to the room and send to another user to invite him
+ When user go to the application using the link, he enter only his name
+ If the user has already participated in conversations, his name has stored in the localstorage. He immediately gets into the room

## Used scripts

#### Front-end
+ React
+ React-router-dom
+ Socket.io
+ React-avatar
+ React-emoji
+ Query-string
+ Node-Sass
+ Prop-types

#### Back-end
+ Express
+ Socket.io

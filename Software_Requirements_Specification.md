#HomeFree's Software Requirements Specification

###Table of Contents

 - [5.1 Introduction](#51-introduction)

 - [5.2 Functional Requirements](#52-functional-requirements)

 - [5.3 Performance Requirements](#53-performance-requirements)

 - [5.4 Environment Requirements](#54-environmental-requirements)

###5.1 Introduction

HomeFree is a mapping application that prioritizes righthand turns and avoids lefts. It uses open source map data provided by OpenStreetMap and routing provided by Open Source Routing Machine. HomeFree creates routes that are safer and allow drivers to make turns faster as they do not have to wait at traffic lights.

This document is organizes the software requirements into three categories: functional, performance, and environment. Functional requirements include specifications that the program is expected to have. Performance requirements outline the completed system's abilities. Environment requirements lists the necessary resources for development, deployment, and execution.

###5.2 Functional Requirements
####5.2.1 Map Interface
The program shall have an interface that has current and accurate map data
####5.2.2 Directions Input
Users must be able to input two locations to be routed
####5.2.3 Routing Capabilities
The program shall take two locations and find a righthand oriented route between them
####5.2.4 Turn-By-Turn Directions
The program *might* be able to give its directions in current time


###5.3 Performance Requirements
####5.3.1 Directions Input
5.3.1.1 Should be an easy two field input form that overlays the original map

5.3.1.2 A simple "Get Directions" button shall begin execution

5.3.1.3 A database of addresses *might* give auto-complete suggestions

####5.3.2 Routing Capabilities
5.3.2.1 Directions shall give feedback on why they were chosen, visible from a dropdown.

5.3.2.2 Directions shall be written out in steps to follow

5.3.2.3 Route shall be highlighted on the map after output

5.3.2.4 Directions should be outputted within 10 seconds of execution

5.3.2.5 Directions *might* be outputted within 2 seconds of execution

###5.4 Environment Requirements

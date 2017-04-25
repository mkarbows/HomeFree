### 4/3 Status Report


This week I came to the conclusion that the best way to solve the problem of
eliminating left hand turns using OSRM would be to re-invent the database by
restricting left turn possibilities, and therefore allowing the routing
algorithm to go unscathed. This solution is unfortunately a whole other project
in itself. This could take another semester's worth of time to complete,
considering my lack of knowledge behind their implementation and their lack
of documentation.

Nonetheless, progress was made on algorithm development. I have developed two
different algorithms that build way points to steer a route away from its
left turns. The first uses the coordinates of the turning point and the
prior distance traveled straight to place a way point at the latitude and
longitude that is the equivalent distance from the turning point in the
directly opposite direction. The second uses the left turn way point and
scaling of blocks in the given area to build four different way points within
the radius to calculate multiple alternate routes and then chooses the one
with the least amount of lefts.

#### Algorithm 1: Compute Single Waypoint
    def waypoint(x1,y1,x2,y2);

    #temporary hard-coded scaling
    oneBlock = 0.0015 # approx. length of one city block in NYC (lat/long)

    deltaX = x1 - x2
    deltaY = y1 - y2

    # Scale to about one city block in NYC
    deltaXsign = 1
    deltaYsign = 1
    if (deltaX < 0):
        deltaXsign = -1
    if (deltaY < 0):
        deltaYsign = -1

    if (deltaX == 0): # Special case, need to avoid dividing by zero
        scaledDeltaY = deltaYsign * oneBlock
        scaledDeltaX = 0
    else:
        m = abs(deltaY / deltaX)
        if (m < 1):
            scaledDeltaY = deltaYsign * m * oneBlock
            scaledDeltaX = deltaXsign * oneBlock
        else:
            scaledDeltaY = deltaYsign * oneBlock
            scaledDeltaX = deltaXsign * (1/m) * oneBlock

    waypointX = x1 + scaledDeltaX
    waypointY = y1 + scaledDeltaY

    return waypointX, waypointY


#### Algorithm 2: Compute Multiple Waypoints
    def circlewaypoint(x1,y1, x2,y2):

    dX = x1 - x2
    dY = y1 - y2

    rf = 1.25 #radius scale factor

    sdX = rf*dX #scale
    sdY = rf*dY

    w1X = x1 + sdX
    w1Y = y1 + sdY
    w2X = x1 + sdX
    w2Y = y1 - sdY
    w3X = x1 - sdX
    w3Y = y1 + sdY

    return w1X,w1Y, w2X,w2Y, w3X,w3Y

Both have edge cases which lead to unrealistic routes. The user should
always be supplied the direct route given by OSRM in addition to HomeFree's
suggested route.

Functionality is not yet visualized through the front end. Testing of
these algorithms was done by physically inputting latitudes and longitudes into the front end to visualize the output.



### 4/26 Status Report
This week I successfully connected the algorithm to the initialization of the front-end so that it could be tested visually with every use case. The algorithm has a lot of faults that need to be debugged. I was also confronted with determining when to give up on building it will all rights and choosing efficiency. Currently, it has a fixed maximum of waypoints at 6. This keeps the algorithm from looping infinitely.

I would like to implement a few more edge cases before I decide how to clean up the fixed value. I believe that depending on the routes, the maximum number of waypoints should alter and I believe that there are steps to be taken before stating these cut offs.

At the beginning of the week, when I was frustrated with how troublesome it was to build a waypoint on the front-end due to the lack of API documentation, I gave up on OSRM and changed to Google's Directions API for a day. After building waypoints successfully, I realized how difficult it was going to be to access Google's response object and tweak it the same way I could with OSRM. So this weekend I finally buckled down and built way points with OSRM.

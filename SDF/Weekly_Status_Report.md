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

Both have edge cases which lead to unrealistic routes. The user should
always be supplied the direct route given by OSRM in addition to HomeFree's
suggested route.

Functionality is not yet visualized through the front end. Testing of
these algorithms was done by physically inputting latitudes and longitudes into the front end to visualize the output. 

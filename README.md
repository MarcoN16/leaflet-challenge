# Earthquake Visualization Project

The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this project, I have developed a way to visualize USGS data that will allow them to better educate the public and other government organizations on issues facing our planet.
## Create the Earthquake Visualization
Get Dataset Information:

    - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. You can access the data on the USGS Earthquake Data page.

    - The following image is an example screenshot of what appears when you visit this link:
    
    ![3-Data](https://github.com/MarcoN16/leaflet-challenge/assets/150491559/b26593ea-3367-41cc-a806-a2e2ad38df5c)


    - Using the URL of this JSON to pull in the data for the visualization:
     
     The following image is a sampling of earthquake data in JSON format:
    
![4-JSON](https://github.com/MarcoN16/leaflet-challenge/assets/150491559/f1570409-6db2-4369-b77a-4490f1fce265)

Code to Import and Visualize the Data:

    - Using Leaflet, I created a map that plots all the earthquakes from the chosen dataset based on their longitude and latitude.
      The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger,           and earthquakes with greater depth appear darker in color.

    - The map includes popups that provide additional information about the earthquake when its associated marker is clicked.

    - On the bottom right, a legend provides info about the depth.

    - It is possible to explore the map to visualize the earthquakes in different parts of the globe.

    <img width="823" alt="BasicMap_info" src="https://github.com/MarcoN16/leaflet-challenge/assets/150491559/b8b04251-603d-4a96-b9b2-15546c9a860a">



## Resources

https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

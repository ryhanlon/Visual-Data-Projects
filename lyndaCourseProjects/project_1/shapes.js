// first project, by Rebecca Hanlon

const dataArray = [5, 11, 18];

const svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

// makes three rectangles on page,
svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
              .attr("height", function(d, i){ return d * 15; })  // positioning top left
              .attr("width", "50")
              .attr("fill", "purple")
              .attr("x", function(d, i){ return 60 * i; })
              .attr("y", function(d, i){ return 300-(d*15); });

let newX = 300;
// makes three circles on page
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
              .attr("class", "first")
              .attr("cx", function(d, i){ newX+=(d*3)+(i*20); return newX; }) // positioning from center of circle
              .attr("cy", "100" )
              .attr("r", function(d){ return d*3; }); // don't need i, because not used

let newX2 = 600;
// makes three ellipse on page
svg.selectAll("ellipse")
    .data(dataArray)
    .enter().append("ellipse")
              .attr("class", "second")
              .attr("cx", function(d, i){ newX2+=(d*3)+(i*20); return newX2; }) // positioning from center of circle
              .attr("cy", "100" )
              .attr("rx", function(d){ return d*3; }) // don't need i, because not used
              .attr("ry", "30");

let newX3 = 900;
// makes three ellipse on page
svg.selectAll("line")
    .data(dataArray)
    .enter().append("line")
              .attr("x1", newX3)
              // .style("stroke", "blue")  // best to style with css,  order css, then .attr or .style
              // .attr("stroke-width", "2")  // best to style with css
              .attr("y1", function(d,i) { return 80+(i*20); })
              .attr("x2", function(d) { return newX3+(d*15); })// don't need i, because not used
              .attr("y2", function(d,i) { return 80+(i*20); });


let textArray = ['start', 'middle', 'end'];
svg.append("text").selectAll("tspan")
    .data(textArray)
    .enter().append('tspan')
         .attr("x", newX3)  //positioning at bottom left corner
         .attr("y", function(d,i){ return 150 + (i*30); })
        // can style in css
         .attr("fill","none")
         .attr("stroke","blue")
         .attr("stroke-width","2")
         .attr("dominant-baseline","middle")  // to align vertically
         .attr("text-anchor","start")  // to align horizontally
         .attr("font-size", "30")
         .text(function(d){ return d; });

svg.append("line")
      .attr("x1",newX3)
      .attr("y1","150")
      .attr("x2",newX3)
      .attr("y2","210");







// manual way
// svg.append("text")
//      .attr("x", newX3)  //positioning at bottom left corner
//      .attr("y", 150)
//     // can style in css
//      .attr("fill","none")
//      .attr("stroke","blue")
//      .attr("stroke-width","2")
//      .attr("dominant-baseline","middle")  // to align vertically
//      .attr("text-anchor","start")  // to align horizontally
//      .attr("font-size", "30")
//      .text("start");
// svg.append("text")
//      .attr("x", newX3)  //positioning at bottom left corner
//      .attr("y", 180)
//     // can style in css
//      .attr("fill","blue")
//      .attr("stroke","none")
//      .attr("dominant-baseline","middle") // to align vertically
//      .attr("text-anchor","middle")  // to align horizontally
//      .attr("font-size", "30")
//      .text("middle");
// svg.append("text")
//      .attr("x", newX3)  //positioning at bottom left corner
//      .attr("y", 210)
//     // can style in css
//      .attr("stroke","blue")
//      .attr("dominant-baseline","middle") // to align vertically
//      .attr("text-anchor","end")  // to align horizontally
//      .attr("fill","none")
//      .attr("font-size", "30")
//      .text("end");
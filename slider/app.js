var w = 500, h = 600;

var svg = d3.select("div#viz")
              .append("svg")
                .attr("width",w)
                .attr("height",h);

var data = [{"provincia":"Buenos Aires","poblacion":15625084},
{"provincia":"Córdoba","poblacion":3308876},
{"provincia":"Santa Fe","poblacion":3194537},
{"provincia":"Ciudad Autónoma de Buenos Aires","poblacion":2890151},
{"provincia":"Mendoza","poblacion":1738929},
{"provincia":"Tucumán","poblacion":1448188},
{"provincia":"Entre Ríos","poblacion":1235994},
{"provincia":"Salta","poblacion":1214441},
{"provincia":"Misiones","poblacion":1101593},
{"provincia":"Chaco","poblacion":1055259},
{"provincia":"Corrientes","poblacion":992595},
{"provincia":"Santiago del Estero","poblacion":874006},
{"provincia":"San Juan","poblacion":681055},
{"provincia":"Jujuy","poblacion":673307},
{"provincia":"Río Negro","poblacion":638645},
{"provincia":"Neuquén","poblacion":551266},
{"provincia":"Formosa","poblacion":530162},
{"provincia":"Chubut","poblacion":509108},
{"provincia":"San Luis","poblacion":432310},
{"provincia":"Catamarca","poblacion":367828},
{"provincia":"La Rioja","poblacion":333642},
{"provincia":"La Pampa","poblacion":318951},
{"provincia":"Santa Cruz","poblacion":273964},
{"provincia":"Tierra del Fuego","poblacion":127205}];

var max = d3.max(data.map(function(obj) { return obj.poblacion;}));
var min = d3.min(data.map(function(obj) { return obj.poblacion;}));
var color = d3.scaleOrdinal(d3.schemeCategory20);

d3.select("div#filter").append("input")
    .attr("id","rango")
    .attr("type","range")
    .attr("min",min)
    .attr("max",max)
    .attr("value",max)
    .style("width","500px")
    .on("change", slider_click );

d3.select("span").text(max.toLocaleString());

var data_filtered;

function slider_click() {
    var valor = +this.value;
    d3.select("span").text(valor.toLocaleString());
    data_filtered  = _.filter(data, function(o) { return o.poblacion <= valor; });

    max = d3.max(data_filtered.map(function(obj) { return obj.poblacion;}));
    escala = d3.scaleLinear().domain([0, max  ]).range([0, w-240]);

    d3.selectAll("rect").data([]).exit().remove();
    d3.selectAll("text").data([]).exit().remove();

    d3.select("g#rect").selectAll("rect").data(data_filtered).enter().append("rect")
        .attr("x",240)
        .attr("y",  function(d,i) { return (i*15)+2;}  )
        .attr("width",  function(d,i) { return escala(d.poblacion);}  )
        .attr("height", 14)
        .attr("fill",function (d,i) { return color(i); } )
        .append("title")
        .text( function(d,i) { return d.poblacion.toLocaleString() + ' habitantes';} );

    svg.append("g").attr("id","textos").style("font-weight","normal").style("fill","grey")
        .selectAll("text.lprov").data(data_filtered).enter().append("text")
        .attr("class","lprov")
        .attr("x",230)
        .attr("y",  function(d,i) { return (i+1)*15;}  )
        .text( function(d,i) { return d.provincia;} )
        .attr("text-anchor","end");
}

svg.append("g").attr("id","textos").style("font-weight","normal").style("fill","grey")
  .selectAll("text.lprov").data(data).enter().append("text")
  .attr("class","lprov")
  .attr("x",230)
  .attr("y",  function(d,i) { return (i+1)*15;}  )
  .text( function(d,i) { return d.provincia;} )
  .attr("text-anchor","end");

var escala = d3.scaleLinear().domain([0, max  ]).range([0, w-240]);

svg.append("g").attr("id","rect")
  .selectAll("rect").data(data).enter().append("rect")
  .attr("x",240)
  .attr("y",  function(d,i) { return (i*15)+2;}  )
  .attr("width",  0 )
  .attr("height", 14)
  .attr("fill",function (d,i) { return color(i); } )
    .append("title")
    .text( function(d,i) { return d.poblacion.toLocaleString() + ' habitantes';} );

d3.selectAll("rect")
  .transition().duration(1000)
  .delay( function(d,i) {return Math.sqrt(i*10000);} )
  .attr("width",  function(d,i) { return escala(d.poblacion);}  );

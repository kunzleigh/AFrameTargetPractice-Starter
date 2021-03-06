var WAVES = [
  {
    name: "WAVE 1",
    sequences: [
      {
        subwave: "2",
        enemies:[
          {
            type: "enemy_target",
            points: [[-2.779,-3.466,-8.405],[-2.717,3.011,-7.228]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[1.874,-7.677,-8.328],[3.490,6.398,-7.157]],
            movement: "single",
          }
        ]
      },
      {
        subwave: "3",
        enemies:[
          {
            type: "enemy_target",
            points: [[-0.000,-8.839,-10.754],[-0.000,6.865,-9.169]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-4.720,-11.803,-9.161],[-6.315,5.616,-7.575]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[4.324,-14.076,-9.161],[6.315,5.616,-7.575]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-0.000,-4.957,-9.048],[0.000,2.312,-7.866]],
            movement: "single",
          }
        ]
      },
      {
        subwave: "4",
        enemies:[
          {
            type: "enemy_target",
            points: [[2.532,-10.411,-9.161],[3.697,6.535,-7.575]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-2.532,-10.095,-9.161],[-3.697,6.535,-7.575]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-0.000,-4.957,-9.048],[0.000,2.312,-7.866]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[5.802,-13.645,-6.388],[4.858,0.887,-5.830],[2.253,3.765,-4.991],[-2.570,3.796,-4.924],[-4.115,2.613,-5.326],[-5.146,1.339,-5.770],[-5.333,1.050,-5.870]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-5.802,-21.383,-7.624],[-4.858,0.593,-7.067],[-2.253,3.471,-6.228],[2.595,3.502,-6.161],[4.080,2.453,-6.569],[5.178,1.071,-6.960],[5.333,0.757,-7.107]],
            movement: "pingpong",
          }
        ]
      },
      {
        subwave: "5",
        enemies:[
          {
            type: "enemy_target",
            points: [[6.423,-4.604,-11.022],[5.502,2.845,-8.485]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-6.423,-4.604,-11.022],[-5.502,2.845,-8.485]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-3.143,-16.484,-7.948],[-2.804,1.664,-6.817],[-2.624,4.543,-6.542]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[0.102,-12.302,-8.235],[0.140,0.816,-9.515],[0.159,6.137,-10.021]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[3.143,-16.484,-7.948],[2.804,1.664,-6.817],[2.624,4.543,-6.542]],
            movement: "pingpong",
          }
        ]
      },
      {
        subwave: "6",
        enemies:[
          {
            type: "enemy_target",
            points: [[7.419,-2.617,-4.583],[6.251,1.269,-5.546],[3.603,3.048,-6.824],[-4.661,2.923,-6.788],[-6.749,5.301,-5.183]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-7.419,-6.477,-4.873],[-6.251,1.269,-6.389],[-3.603,3.048,-8.657],[4.661,2.923,-8.159],[6.749,5.301,-5.473]],
            movement: "pingpong",
          },
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[-3.570,-10.350,-9.308],[-1.735,1.652,-10.408],[2.206,2.076,-10.369],[2.617,5.974,-10.166],[-2.128,5.852,-10.231]],
            movement: "loop",
            enemyTimeOffset: -1000,
          }
        ]
      },
      {
        subwave: "7",
        enemies:[
          {
            type: "enemy_target",
            points: [[-0.117,-2.922,-9.989],[-6.728,3.366,-7.252],[5.960,3.435,-7.280]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[0.051,-3.250,-10.318],[4.455,2.252,-7.790],[-3.950,2.320,-7.818]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[0.058,-2.013,-9.194],[4.455,4.694,-6.410],[-3.950,4.763,-6.438]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-0.019,-1.414,-8.712],[-2.206,5.633,-5.545],[1.956,5.702,-5.573]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-5.886,-1.106,-5.230],[-4.331,4.539,-4.951],[0.000,6.983,-4.318]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[4.955,-3.852,-5.815],[3.565,0.447,-6.539],[-0.237,1.357,-7.004]],
            movement: "single",
          }
        ]
      },
      {
        subwave: "8",
        enemies:[
          {
            type: "enemy_target",
            points: [[-5.898,-3.573,-4.946],[-5.920,1.011,-4.932],[-5.901,3.772,-4.958]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-4.267,-4.889,-6.345],[-4.289,1.815,-6.331],[-4.270,4.556,-6.357]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-2.281,-6.165,-7.163],[-2.304,2.565,-7.150],[-2.284,5.285,-7.176]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-0.043,-7.572,-7.469],[-0.066,1.799,-7.455],[-0.046,4.560,-7.481]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[2.119,-9.295,-7.249],[2.097,1.367,-7.236],[2.116,4.108,-7.262]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[4.068,-11.333,-6.409],[4.046,0.575,-6.395],[4.065,3.295,-6.422]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[5.715,-14.491,-5.093],[5.693,1.654,-5.079],[5.712,4.500,-5.105]],
            movement: "pingpong",
          }
        ]
      },
      {
        subwave: "9",
        enemies:[
          {
            type: ["enemy_target","enemy_target","enemy_target","enemy_target"],
            points: [[-8.397,-5.214,-8.919],[-5.099,5.574,-7.011],[-0.154,2.375,-7.229],[4.780,-0.703,-7.721],[7.075,2.325,-8.069],[5.146,5.540,-8.403],[0.530,2.524,-9.188],[-4.186,-0.706,-9.842],[-6.878,2.511,-8.356]],
            movement: "loop",
            enemyTimeOffset: -800,
          },
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[9.242,-9.088,-7.545],[5.098,5.615,-5.763],[0.153,2.416,-5.982],[-4.781,-0.661,-6.473],[-7.076,2.366,-6.821],[-5.147,5.581,-7.156],[-0.531,2.565,-7.941],[4.185,-0.665,-8.594],[6.877,2.552,-7.108]],
            movement: "loop",
            enemyTimeOffset: -800,
          }
        ]
      },
      {
        subwave: "10",
        enemies:[
          {
            type: "enemy_target",
            points: [[3.269,-4.923,-7.350],[5.260,7.431,-5.765]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-3.277,-4.923,-7.350],[-5.267,7.431,-5.765]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-1.633,-3.221,-7.997],[-2.162,5.305,-6.815]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[1.532,-3.221,-7.997],[2.185,5.305,-6.815]],
            movement: "single",
          },
          {
            type: ["enemy_target","enemy_target","enemy_target","enemy_target"],
            points: [[4.303,-1.904,-5.736],[-0.275,-2.036,-6.847],[-4.825,-1.601,-5.221],[-4.558,1.129,-5.118],[-3.569,3.022,-5.324],[-1.982,0.774,-5.739],[-0.064,2.984,-6.016],[1.848,0.764,-5.803],[3.476,2.997,-5.457],[4.700,0.738,-5.096],[5.241,-10.892,-5.080]],
            movement: "loop",
            enemyTimeOffset: -1500,
          }
        ]
      },
      {
        subwave: "11",
        enemies:[
          {
            type: "enemy_target",
            points: [[0.238,-9.234,-9.310],[5.180,3.034,-9.861],[-0.018,2.720,-7.559],[-5.041,3.034,-9.861]],
            movement: "pingpong",
          }
        ]
      }
    ]
  },
  {
    name: "WAVE 2",
    sequences: [
      {
        subwave: "2001",
        enemies:[
          {
            type: ["enemy_target","enemy_target","enemy_target","enemy_target"],
            points: [[0.102,-11.982,-9.037],[0.142,3.765,-13.133],[-1.412,2.089,-8.481],[0.152,1.404,-2.714],[0.164,5.907,-2.462],[1.545,6.252,-9.056]],
            movement: "loop",
            enemyTimeOffset: -1585,
          }
        ]
      },
      {
        subwave: "2002",
        enemies:[
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[0.102,-20.812,-7.970],[0.142,3.765,-10.804],[-1.941,1.304,-7.540],[-1.808,1.404,-3.581],[-1.796,5.907,-1.843],[-1.697,6.252,-6.858]],
            movement: "loop",
            enemyTimeOffset: -1300,
            loopStart: 2,
          },
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[0.102,-11.982,-9.037],[0.142,3.765,-10.804],[1.859,1.304,-7.540],[1.992,1.404,-3.581],[2.003,5.907,-1.843],[2.102,6.252,-6.858]],
            movement: "loop",
            enemyTimeOffset: -1300,
            loopStart: 2,
          }
        ]
      },
      {
        subwave: "2003",
        enemies:[
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[-3.635,-12.072,-5.277],[-3.807,3.628,-8.542],[-2.358,1.958,-6.590],[-1.562,1.404,-2.714],[-3.219,4.870,-2.166],[-4.926,5.662,-7.516]],
            movement: "loop",
            enemyTimeOffset: -1585,
          },
          {
            type: "enemy_target",
            points: [[0.373,-11.356,-50.516],[0.142,3.079,-17.640],[0.142,2.955,-12.288],[0.142,2.785,-8.047],[0.142,2.458,-6.873],[0.142,2.326,-6.423]],
            movement: "single",
          },
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[3.635,-12.072,-5.277],[3.807,3.628,-8.542],[2.358,1.958,-6.590],[1.562,1.404,-2.714],[3.219,4.870,-2.166],[4.926,5.662,-7.516]],
            movement: "loop",
            enemyTimeOffset: -1585,
          }
        ]
      },
      {
        subwave: "2004",
        enemies:[
          {
            type: "enemy_target",
            points: [[-2.878,-7.579,-5.481],[-3.763,1.667,-4.806],[1.462,2.373,-3.978],[2.949,3.076,-1.987]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[2.348,-11.066,-5.481],[3.763,1.667,-4.806],[-1.462,2.373,-3.978],[-2.949,3.076,-1.987]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[4.017,-15.603,-32.074],[3.047,-0.480,-23.429],[1.549,1.924,-7.464]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-2.487,-14.442,-19.974],[-3.672,-0.480,-16.871],[-3.028,3.002,-7.177]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[-1.403,-9.224,-24.527],[-1.992,0.174,-26.051],[0.580,3.837,-5.928]],
            movement: "single",
          },
          {
            type: "enemy_target",
            points: [[0.583,-12.435,-27.199],[0.294,-0.480,-21.448],[-1.835,3.868,-8.518]],
            movement: "single",
          }
        ]
      },
      {
        subwave: "2005",
        enemies:[
          {
            type: ["enemy_target","enemy_target","enemy_target","enemy_target"],
            points: [[4.101,-5.177,-5.577],[5.205,1.154,-4.972],[3.834,5.993,-1.522],[0.169,4.682,-3.751],[-3.488,3.536,-6.089],[-5.189,5.007,-4.362],[-3.759,6.553,-2.504],[-0.338,5.556,-5.004],[3.158,4.411,-7.553],[5.153,5.207,-4.439]],
            movement: "loop",
            enemyTimeOffset: -800,
            loopStart: 2,
          },
          {
            type: "enemy_target",
            points: [[-0.063,-6.742,-7.931],[-5.342,2.732,-7.897],[4.737,2.818,-7.933]],
            movement: "pingpong",
          },
          {
            type: "enemy_target",
            points: [[-0.525,-7.183,-9.356],[5.342,1.205,-9.389],[-4.737,1.291,-9.424]],
            movement: "pingpong",
          }
        ]
      },
      {
        subwave: "2006",
        enemies:[
          {
            type: ["enemy_target","enemy_target"],
            points: [[-4.493,-1.832,-6.394],[6.629,-1.590,-5.740],[6.279,1.103,-4.304],[4.222,3.393,-3.757],[0.087,4.573,-4.070],[-4.130,3.392,-3.916],[-6.475,0.219,-4.915],[-6.310,-16.689,-5.513]],
            movement: "loop",
            enemyTimeOffset: -1100,
          },
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[4.541,-1.901,-6.427],[-6.699,-1.616,-5.719],[-6.636,1.504,-2.983],[-4.450,4.425,-1.980],[-0.088,5.989,-2.373],[4.322,4.430,-2.141],[6.786,0.236,-3.210],[6.295,-5.078,-5.031]],
            movement: "loop",
            enemyTimeOffset: -1100,
          },
          {
            type: ["enemy_target","enemy_target"],
            points: [[4.193,-1.096,-6.432],[-6.186,-0.905,-5.777],[-5.680,1.241,-4.993],[-3.541,2.773,-5.370],[-0.081,3.559,-6.116],[3.422,2.766,-5.528],[5.716,0.546,-5.292],[6.081,-10.693,-5.641]],
            movement: "loop",
            enemyTimeOffset: -1100,
          },
          {
            type: ["enemy_target","enemy_target","enemy_target"],
            points: [[-3.823,-1.762,-6.705],[4.949,-1.243,-5.718],[3.229,1.704,-6.223],[0.074,2.425,-7.033],[-3.120,1.684,-6.379],[-5.116,-0.508,-5.958],[-5.312,-7.883,-5.939]],
            movement: "loop",
            enemyTimeOffset: -1100,
          }
        ]
      },
      {
        subwave: "2007",
        enemies:[
          {
            type: ["enemy_target","enemy_target"],
            points: [[0.000,-11.755,-24.508],[-0.154,0.110,-19.769],[-7.344,0.112,-3.727],[-7.629,-5.338,-2.696],[-4.647,-6.852,-19.380],[-3.776,4.304,-7.531],[-1.544,5.107,-3.990]],
            movement: "loop",
            enemyTimeOffset: -3000,
            loopStart: 2,
          },
          {
            type: ["enemy_target","enemy_target"],
            points: [[-0.000,-11.993,-25.733],[0.154,0.110,-23.081],[7.344,0.112,-3.727],[7.629,-5.338,-2.696],[4.647,-6.852,-19.287],[3.776,4.304,-7.531],[1.544,5.107,-3.990]],
            movement: "loop",
            enemyTimeOffset: -3000,
            loopStart: 2,
          }
        ]
      }
    ]
  }
];

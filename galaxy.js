const galaxyPixelsArray = [];
const squareSize = 51;

const centerLines = parseInt(squareSize/2) + 1;
const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]

class SpreadFire {
    lightLevelSum= 0;
    interactionSum = 0;
    division = 0;
    newLightLevel = 0;
    neighborsInterations= 0;

    getLightSubtraction() {
        return parseInt(Math.random() * 3);
    }

    reset() {
        this.lightLevelSum = 0;
        this.division = 0;
        this.neighborsInterations= 0;

        return;
    }

    0() {
        return
    }

    1(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex + squareSize - 1], 
            galaxyPixelsArray[pixelIndex + squareSize],
            galaxyPixelsArray[pixelIndex - 1]
        ];

        neighborsArray.forEach((pixel) => {
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });
        if (this.division != 0) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
            galaxyPixelsArray[pixelIndex].numberOfInterations++;

        }

        return;
    }

    2(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex + 1],
            galaxyPixelsArray[pixelIndex + 1 + squareSize],
            galaxyPixelsArray[pixelIndex + squareSize]
        ];

        neighborsArray.forEach((pixel) => {
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });

        if (this.division != 0) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].numberOfInterations++;
            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
        }

        return;
    }

    3(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex + 1],
            galaxyPixelsArray[pixelIndex + 1 - squareSize], 
            galaxyPixelsArray[pixelIndex - squareSize]
        ];

        neighborsArray.forEach((pixel) => {
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });

        if (this.division != 0) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].numberOfInterations++;
            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
        }
        return;
    }

    4(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex - 1],
            galaxyPixelsArray[pixelIndex - 1 - squareSize], 
            galaxyPixelsArray[pixelIndex - squareSize]
        ];


        neighborsArray.forEach((pixel) => {
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });

        if (this.division != 0) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].numberOfInterations++;
            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
        }

        return;
    }

    5(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex - 1], 
            galaxyPixelsArray[pixelIndex + squareSize], 
            galaxyPixelsArray[pixelIndex - 1 + squareSize]
        ];
        
        neighborsArray.forEach((pixel) => {
            this.neighborsInterations += pixel.numberOfInterations;
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });

        if (this.division != 0 && this.neighborsInterations >= 4) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].numberOfInterations++;
            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
        }
    }

    6(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex + 1], 
            galaxyPixelsArray[pixelIndex + squareSize], 
            galaxyPixelsArray[pixelIndex + 1 + squareSize]
        ]
        
        neighborsArray.forEach((pixel) => {
            this.neighborsInterations += pixel.numberOfInterations;
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });

        if (this.division != 0 && this.neighborsInterations >= 3) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].numberOfInterations++;
            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
        }
        return;
    }

    7(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex + 1], 
            galaxyPixelsArray[pixelIndex - squareSize], 
            galaxyPixelsArray[pixelIndex + 1 - squareSize]
        ]
        
        neighborsArray.forEach((pixel) => {
            this.neighborsInterations += pixel.numberOfInterations;
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });

        if (this.division != 0 && this.neighborsInterations >= 4) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].numberOfInterations++;
            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
        }
    }

    8(pixelIndex) {
        this.reset();
        const neighborsArray = [
            galaxyPixelsArray[pixelIndex - 1], 
            galaxyPixelsArray[pixelIndex - squareSize], 
            galaxyPixelsArray[pixelIndex - 1 - squareSize]
        ]
        
        neighborsArray.forEach((pixel) => {
            this.neighborsInterations += pixel.numberOfInterations;
            if (pixel.numberOfInterations > 1) {
                this.division++;
                this.lightLevelSum += pixel.lightLevel;
            }
        });

        if (this.division != 0 && this.neighborsInterations > 4) {
            this.newLightLevel = parseInt(this.lightLevelSum/this.division) - this.getLightSubtraction();

            galaxyPixelsArray[pixelIndex].numberOfInterations++;
            galaxyPixelsArray[pixelIndex].lightLevel = this.newLightLevel;
        }
    }
}

const spreadFireClass = new SpreadFire();

function start() {
    createGalaxyDataStructure();
    createFireSource();
    renderTable();


    setInterval(spreadFire, 200);
};

function createGalaxyDataStructure() {
    for (let row = 0; row < squareSize; row++) {
        for (let column = 0; column < squareSize; column++) {
            const pixelIndex = column + (row * squareSize);

            // East Line
            if (row === (centerLines - 1) && column > (centerLines - 1)) {

                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 1
                };
                continue;
            }
            // North Line
            if (column === (centerLines - 1) && row < (centerLines - 1)) {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 2
                };
                continue;
            }
            // West Line
            if (row === (centerLines - 1) && column < (centerLines - 1)) {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 3
                };
                continue;
            }
            // South Line
            if (column === (centerLines - 1) && row > (centerLines - 1)) {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 4
                };

                continue;
            } 
            // First Quadrant
            if (column > (centerLines - 1) && row < (centerLines - 1)) {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 5
                };

                continue;
            }
            // Second Quadrant
            if (column < (centerLines - 1) && row < (centerLines - 1)) {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 6
                };

                continue;
            }
            // Third Quadrant
            if (column < (centerLines - 1) && row > (centerLines - 1)) {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 7
                };

                continue;
            }
            // Fourth Quadrant
            if (column > (centerLines - 1) && row > (centerLines - 1)) {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 8
                };

                continue;
            }
            else {
                galaxyPixelsArray[pixelIndex] = {
                    lightLevel: 0,
                    numberOfInterations: 0,
                    galaxyArea: 0
                }; 
            }
        }
    }
    // for (let pixelIndex = 0; pixelIndex < (squareSize * squareSize); pixelIndex++) {
    //     galaxyPixelsArray[pixelIndex] = {
    //         lightLevel: 0,
    //         numberOfInterations: 0,
    //         galaxyArea: 1
    //     };
    // }
}

function renderTable() {
    let html = '<table cellpadding=0 cellspacing=0>'

   for (let row = 0; row < squareSize; row++) {
       html += '<tr>';

       for (let column = 0; column < squareSize; column++) {
            const pixelIndex = column + (row * squareSize);

            if (galaxyPixelsArray[pixelIndex].lightLevel < 0) {
                galaxyPixelsArray[pixelIndex].lightLevel = 0;
            }

            const fireIntensity = galaxyPixelsArray[pixelIndex].lightLevel 
            const color = fireColorsPalette[fireIntensity]
            const colorString = `${color.r},${color.g},${color.b}`

            html += `<td class="pixel" style="background-color: rgb(${colorString})">`
            html += '</td>'

            // html += '<td>'
            // html += `<div class="pixel-index">${pixelIndex}</div>`
            // html += `<div class="light-level">${galaxyPixelsArray[pixelIndex].lightLevel}</div>`
            // html += '</td>'
       }
   };

    document.querySelector("#galaxyCanvas").innerHTML = html;
}

function createFireSource() {
    const fireSourceIndex = (squareSize - 1) * centerLines;
    galaxyPixelsArray[fireSourceIndex].lightLevel = 36;
    galaxyPixelsArray[fireSourceIndex].numberOfInterations = 2;
    galaxyPixelsArray[fireSourceIndex].galaxyArea = 0;
    
}

function spreadFire() {
    for (let row = 0; row < squareSize; row++) {
        for (let column = 0; column < squareSize; column++) {
            const pixelIndex = column + (row * squareSize);
            spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);

            // if (
            //     (row === (centerLines - 1) && column > (centerLines - 1)) ||
            //     (column === (centerLines - 1) && row < (centerLines - 1)) ||
            //     (row === (centerLines - 1) && column < (centerLines - 1)) ||
            //     (column === (centerLines - 1) && row > (centerLines - 1))
            // ) {
            //     spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);
            // }
            // East Line
            // if (row === (centerLines - 1) && column > (centerLines - 1)) {
            //     if (galaxyPixelsArray[pixelIndex - 1].numberOfInterations > 1) {

            //         spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);
            //         // galaxyPixelsArray[pixelIndex].lightLevel = galaxyPixelsArray[pixelIndex - 1].lightLevel - 1;
            //         // galaxyPixelsArray[pixelIndex].numberOfInterations++;
            //     }
            // }
            // // North Line
            // if (column === (centerLines - 1) && row < (centerLines - 1)) {
            //     if (galaxyPixelsArray[pixelIndex + squareSize].numberOfInterations >= 1) {
            //         // const haveWind = parseInt(Math.random() * 2);

            //         spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);
            //         // if (haveWind === 1) {
            //         //     applyRotationEffect(2, pixelIndex, galaxyPixelsArray[pixelIndex + squareSize]);
            //         // } else {
            //         // galaxyPixelsArray[pixelIndex].lightLevel = galaxyPixelsArray[pixelIndex + squareSize].lightLevel - 1;
            //         // galaxyPixelsArray[pixelIndex].numberOfInterations++;
            //         // }
            //     }
            // }
            // // West Line
            // if (row === (centerLines - 1) && column < (centerLines - 1)) {
            //     if (galaxyPixelsArray[pixelIndex + 1].numberOfInterations >= 1) {
            //         // const haveWind = parseInt(Math.random() * 2);
            //         spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);

            //         // galaxyPixelsArray[pixelIndex].lightLevel = galaxyPixelsArray[pixelIndex + 1].lightLevel - 1;
            //         // galaxyPixelsArray[pixelIndex].numberOfInterations++;
            //     }
            // }
            // // South Line
            // if (column === (centerLines - 1) && row > (centerLines - 1)) {
            //     if (galaxyPixelsArray[pixelIndex - squareSize].numberOfInterations > 1) {
            //         // const haveWind = parseInt(Math.random() * 2);

            //         // if (haveWind === 1) {
            //         //     applyRotationEffect(4, pixelIndex, galaxyPixelsArray[pixelIndex - squareSize]);
            //         // } else {
            //         galaxyPixelsArray[pixelIndex].lightLevel = galaxyPixelsArray[pixelIndex - squareSize].lightLevel - 1;
            //         galaxyPixelsArray[pixelIndex].numberOfInterations++;
            //         // }
            //     }
            
            // }
            // Forth Quadrant 
            // if (column > (centerLines - 1) && row > (centerLines - 1)) {
            //     const neighborsArray = [galaxyPixelsArray[pixelIndex - 1], galaxyPixelsArray[pixelIndex - squareSize], galaxyPixelsArray[pixelIndex - 1 - squareSize]];

            //     let lightLevelSum= 0;
            //     let interactionsSum= 0;
            //     for (pixel in neighborsArray) {
            //         lightLevelSum += neighborsArray[pixel].lightLevel;
            //         interactionsSum += neighborsArray[pixel].numberOfInterations;
            //     }

            //     if (interactionsSum > 4) {
            //         galaxyPixelsArray[pixelIndex].lightLevel = parseInt(lightLevelSum/3);
            //         galaxyPixelsArray[pixelIndex].numberOfInterations++;
            //     }
            //     continue;
            // }
            // // First Quadrant
            // if (column > (centerLines - 1) && row < (centerLines - 1)) {
            //     spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);
            //     continue;
            // }
            // // Second Quadrant
            // if (column < (centerLines - 1) && row < (centerLines - 1)) {
            //     spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);
            //     continue;
            //     const neighborsArray = [galaxyPixelsArray[pixelIndex + 1], galaxyPixelsArray[pixelIndex + squareSize], galaxyPixelsArray[pixelIndex + 1 + squareSize]];
            //     console.log(pixelIndex);
            //     let lightLevelSum= 0;
            //     let interactionsSum= 0;
            //     for (pixel in neighborsArray) {
            //         lightLevelSum += neighborsArray[pixel].lightLevel;
            //         interactionsSum += neighborsArray[pixel].numberOfInterations;
            //     }

            //     if (interactionsSum >= 4) {
            //         galaxyPixelsArray[pixelIndex].lightLevel = parseInt(lightLevelSum/3);
            //         galaxyPixelsArray[pixelIndex].numberOfInterations++;
            //     }
            //     continue;
            // }

            // // Third Quadrant
            // if (column < (centerLines - 1) && row > (centerLines - 1)) {
            //     spreadFireClass[`${galaxyPixelsArray[pixelIndex].galaxyArea}`](pixelIndex);
            //     continue;
            // }

        }
    };

    renderTable();
}


start();
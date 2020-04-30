// let myTV = {} empty base object

let myTV = {
    screenSize: 27, // the key
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony"
};

let yourTV = { // key valued object
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "Samsung"
};

// create a function called TV
function TV(screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;

    this.getDescription = () => `A ${
        this.screenSize
    }, ${
        this.refreshRate
    }, ${
        this.screenType
    }, ${
        this.manufacturer
    }`;
}

let firstTv = new TV(80, "led", 80, "LG");
console.log(firstTv.screenType);

class TV {
    constructor(screenSize, sceenType, refreshRate, manufacturer) {
        this.screenSize = screenSize;
        this.screenType = screenType;
        this.refreshRate = refreshRate;
        this.manufacturer = manufacturer;
    }
    getDescription() {
        return `A ${
            this.screenSize
        }, ${
            this.refreshRate
        }, ${
            this.screenType
        }, ${
            this.manufacturer
        }`;
    }
}

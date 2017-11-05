//  background: linear-gradient(rgb(128, 128, 128), #000);
    backgroundStyle(value){
    	  return 'background: linear-gradient(rgb(' + this.setRGB(/*this.$store.getters.currentWeather*/ value) + ') 80%, #fff)';
    },
    calcRGB(value){
      value = 127 * ( Math.abs(value) / 100); 
      return (value * value) / 5;
    },
    //linear-gradient(0deg, blue, green 40%, red);
    setRGB(value){
      let red = 255;
      let green = 254;
      let blue = 254;
      const gradient = {
        colorA: {
          r: 255,
          g: 255,
          b: 255
        },
        colorB: {
          r: 255,
          g: 255,
          b: 255
        },
        fontColor:{
          r: 255,
          g: 255,
          b: 255
        }
      }
      console.log(avgColor);
      if(value > 0){
        gradient.colorA.r = 255;
        gradient.colorA.g = parseInt(255 - (this.calcRGB(value) / 2));
        gradient.colorA.b = parseInt(255 - this.calcRGB(value));
      }
      else if(value < 0){
        gradient.colorA.r = parseInt(255 - this.calcRGB(value));
        gradient.colorA.g = parseInt(255 - (this.calcRGB(value) / 2));
        gradient.colorA.b = 255;
      }
      return `${gradient.colorA.r}, ${gradient.colorA.g}, ${gradient.colorA.b}`;
    }
  },
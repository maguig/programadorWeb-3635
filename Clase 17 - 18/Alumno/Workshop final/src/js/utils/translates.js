function genderTranslate(gender) {
    switch (gender) {
      case 'male':
        return 'masculino';
        break;
  
      case 'female':
        return 'femenino';
        break;
  
      case 'n/a':
        return 'n/a';
        break;
  
      default:
        return gender;
        break;
    }
  }
  
  var TRANSLATES = {
    ES: {
      blue: 'azules',
      yellow: 'amarillos',
      red: 'rojos',
      brown:'marrones',
      blueGray:'gris azulado'
    },
  
    EN: {
      blue: 'blue',
      yellow: 'yellow',
      red: 'red',
      brown: 'brown',
      blueGray:'blue_gray'
    },
  
    PT: {
      blue: 'azul',
      yellow: 'amarela',
      red: 'vermelha',
      bronw: 'castanha',
      blueGray:'cinza azul'
    }
  };
  
  function eyeTranslate(lang, eyeColor) {
    return TRANSLATES[lang][eyeColor] || eyeColor;
  }

  export {
      eyeTranslate,
      genderTranslate
  }
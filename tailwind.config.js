module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sansSerif: ['Roboto'],
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { transform: ' translateY(5%)', opacity: 0 },
          '100%': { transform: 'translateY(0%))', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out',
      },
      fontSize: {
        med: '20px',
        pdfdesc: '9px',
      },
      rotate: {
        270: '270deg',
      },
      colors: {
        grisHeader: '#2F3337',
        generalBg: '#E5E7EB',
        grisclaro: '#9A9A9A',
        grisoscuro: '#424242',
        azulmedio: ' #26B4FF',
        grislabel: '#727171',
        separadores: '#A7A7A7',
        bgModal: '#C4C4C48A',
        counterEmpresa: '#525252',
      },
      height: {
        admin: '8%',
        form: '92%',
        header: '10%',
        home: '90%',
        cardIcon: '108px',
        cardIconMob: '100px',
        boton: '60px',
        botonAceptar: '47px',
      },
      width: {
        /**Items del header [1 - 2 - 3 - 4 - 5 - 6]*/
        header1: '19%',
        header2: '21%',
        header3: '19%',
        header4: '13.6667%',
        header5: '13.6667%',
        header6: '13.6667%',
        cardIcon: '108px',
        cardIconMob: '100px',
        boton: '228px',
        botonAceptar: '223px',
      },
      boxShadow: {
        boton: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        botonAceptar: '0px 2px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      translate: ['group-hover'],
      transform: ['group-hover'],
    },
  },
  plugins: [],
};

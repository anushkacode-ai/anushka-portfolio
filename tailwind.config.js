const c=n=>`rgb(var(--${n}) / <alpha-value>)`;
export default{darkMode:'class',content:['./index.html','./src/**/*.{js,jsx}'],
theme:{extend:{colors:{bg:c('bg'),surface:c('surface'),ink:c('ink'),muted:c('muted'),line:c('line'),accent:c('accent'),onaccent:c('onaccent')},
fontFamily:{sans:['"Schibsted Grotesk"','system-ui','sans-serif']}}},plugins:[]};

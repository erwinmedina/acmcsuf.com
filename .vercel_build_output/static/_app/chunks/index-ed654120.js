const s=["0","0.0","0x0","null","undefined","false","NaN","''",'""',"``"],e=new RegExp(`^(${s.join("|")})$`,"i");function t(n){return!(!n||e.test(n))}t({}.VITE_DEBUG);

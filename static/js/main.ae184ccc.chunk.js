(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),i=n(5),o=n.n(i),u=(n(16),n(17),n(6)),E=n(2),O=n(3),s=n(4);!function(e){e.START_GAME="START_GAME",e.END_GAME="END_GAME",e.TOGGLE_PLAYER_TURN="TOGGLE_PLAYER_TURN",e.START_LOADING="START_LOADING",e.STOP_LOADING="STOP_LOADING",e.MAKE_MOVE="MAKE_MOVE",e.SET_WINNER="SET_WINNER",e.UNDO_LAST_STEP="UNDO_LAST_STEP",e.ADD_PREV_MOVES="ADD_PREV_MOVES",e.RESET_GAME="RESET_GAME"}(r||(r={}));var l,b,T,j=function(){return{type:r.STOP_LOADING}},f=function(){return{type:r.START_LOADING}},_=function(){return{type:r.START_GAME}},d=function(){return{type:r.END_GAME}},S=function(e){return{type:r.TOGGLE_PLAYER_TURN,player:e}},A=function(e){return{type:r.MAKE_MOVE,board:e}},p=function(e){return{type:r.SET_WINNER,winner:e}},P=function(e){return{type:r.ADD_PREV_MOVES,prevSteps:e}},v=function(){return{type:r.RESET_GAME}};!function(e){e.Player_1="PLAYER_1",e.Player_2="PLAYER_2"}(l||(l={})),function(e){e.COMPLETED="COMPLETED",e.IN_PROGRESS="IN_PROGRESS",e.NOT_STARTED="NOT_STARTED"}(b||(b={})),function(e){e.X="X",e.O="O",e.EMPTY=""}(T||(T={}));var M=n(10),N=function e(){Object(M.a)(this,e)};N.getWinner=function(e){for(var t=0;t<3;t++)if(e[t][0]!=T.EMPTY&&e[t][1]==e[t][0]&&e[t][1]==e[t][2])return e[t][0];for(var n=0;n<3;n++)if(e[0][n]!=T.EMPTY&&e[1][n]==e[0][n]&&e[1][n]==e[2][n])return e[0][n];return e[0][0]!=T.EMPTY&&e[1][1]==e[0][0]&&e[1][1]==e[2][2]?e[0][0]:e[2][0]!=T.EMPTY&&e[1][1]==e[2][0]&&e[1][1]==e[0][2]?e[0][2]:T.EMPTY},N.isGameLeft=function(e){for(var t=0;t<3;t++)for(var n=0;n<3;n++)if(e[t][n]==T.EMPTY)return!0;return!1},N.makeMove=function(e,t,n,r){if(t>=0&&n>=0&&t<3&&n<3){var c=Object(u.a)(e);return c[t][n]=r,c}throw new Error("Invalid coordinates")},N.undoPrevStep=function(e,t){if(!t.length)return{board:e,prevStep:t};var n=t.pop();if(!n)return{board:e,prevStep:t};var r=n.i,c=n.j;if(r>=0&&c>=0&&r<3&&c<3)return e[r][c]=T.EMPTY,{board:e,prevStep:t};throw new Error("Invalid coordinates")};var R=n(1),y=function(e){return Object(R.jsx)("div",{className:"bg-white h-12 cursor-pointer flex justify-center items-center",onClick:function(){e.cell===T.EMPTY&&e.onClick()},children:e.cell})},h=function(e){var t=e.board.flat().map((function(t,n){return Object(R.jsx)(y,{cell:t,onClick:(r=n,function(){var t=Math.floor(r/3),n=r%3;e.onCellClick(t,n)})},n);var r}));return Object(R.jsxs)("div",{className:"text-center\t","data-testid":"board",children:[Object(R.jsx)("div",{className:"grid grid-cols-3 bg-gray-500 gap-2 ",children:t}),Object(R.jsx)("button",{onClick:function(){e.onUndoButtonClick()},className:"mt-6 bg-gray-300\tpx-4 py-2",children:"Undo"})]})},G=function(e){return Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:e.winner?"Winner is ".concat(e.winner):"Draw"}),Object(R.jsx)("button",{onClick:e.resetGame,className:"mt-6 bg-gray-300\tpx-4 py-2",children:"Reset"})]})},g=function(e){return Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:e.onClick,className:"mt-6 bg-gray-300\tpx-4 py-2",children:"Start game"})})},D=function(){var e,t=Object(s.b)(),n=(e={},Object(O.a)(e,l.Player_1,T.O),Object(O.a)(e,l.Player_2,T.X),e),r=Object(s.c)((function(e){return Object(E.a)({},e)})),c=r.board,a=r.gameStatus,i=r.turn,o=r.winner,M=r.loading,y=r.prevStep,D=function(){t(f()),setTimeout((function(){t(j()),t(_())}),2e3)},m=function(e){return e==l.Player_1?l.Player_2:l.Player_1},L=function(e,r){try{var a=N.makeMove(c,e,r,n[i]),o=N.getWinner(a);if(o!=T.EMPTY){var E=o===T.O?l.Player_1:l.Player_2;t(p(E)),t(d())}N.isGameLeft(c)||t(d()),t(A(a));var O=Object(u.a)(y);O.push({i:e,j:r}),t(P(O)),t(S(m(i)))}catch(s){console.error(s)}},x=function(){try{var e=N.undoPrevStep(c,y);t(A(e.board)),t(P(e.prevStep)),t(S(m(i)))}catch(n){console.error(n)}},w=function(){t(v())};return Object(R.jsx)("div",{className:"flex justify-center\titems-center h-screen\tw-screen",children:M?Object(R.jsx)("h1",{children:"Loading"}):Object(R.jsx)("div",{className:"w-60 text-center",children:function(e){switch(e){case b.IN_PROGRESS:return Object(R.jsx)(h,{board:c,onCellClick:L,onUndoButtonClick:x});case b.COMPLETED:return Object(R.jsx)(G,{winner:o,resetGame:w});case b.NOT_STARTED:return Object(R.jsx)(g,{onClick:D})}}(a)})})};var m=function(){return Object(R.jsx)(D,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},x=n(11),w={loading:!1,turn:l.Player_1,gameStatus:b.NOT_STARTED,winner:null,board:new Array(3).fill([]).map((function(e){return new Array(3).fill(T.EMPTY)})),prevStep:[]},C=Object(x.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.END_GAME:return Object(E.a)(Object(E.a)({},e),{},{gameStatus:b.COMPLETED});case r.START_GAME:return Object(E.a)(Object(E.a)({},e),{},{gameStatus:b.IN_PROGRESS});case r.TOGGLE_PLAYER_TURN:return Object(E.a)(Object(E.a)({},e),{},{turn:t.player});case r.START_LOADING:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case r.STOP_LOADING:return Object(E.a)(Object(E.a)({},e),{},{loading:!1});case r.MAKE_MOVE:case r.UNDO_LAST_STEP:return Object(E.a)(Object(E.a)({},e),{},{board:t.board});case r.SET_WINNER:return Object(E.a)(Object(E.a)({},e),{},{winner:t.winner});case r.ADD_PREV_MOVES:return Object(E.a)(Object(E.a)({},e),{},{prevStep:t.prevSteps});case r.RESET_GAME:return Object(E.a)(Object(E.a)({},w),{},{board:new Array(3).fill([]).map((function(e){return new Array(3).fill(T.EMPTY)}))});default:return Object(E.a)({},e)}}));o.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(s.a,{store:C,children:Object(R.jsx)(m,{})})}),document.getElementById("root")),L()}},[[23,1,2]]]);
//# sourceMappingURL=main.ae184ccc.chunk.js.map
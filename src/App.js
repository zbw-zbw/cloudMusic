import React from 'react';
import {GlobalStyle} from "./style";
import {IconStyle} from "./assets/iconfont/iconfont";
import routes from "./routes/index"
import {renderRoutes} from "react-router-config";
import {HashRouter} from "react-router-dom";
import store from "./store";
import {Provider} from 'react-redux'

function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<GlobalStyle/>
				<IconStyle/>
				{renderRoutes(routes)}
			</HashRouter>
		</Provider>
	);
}

export default App;

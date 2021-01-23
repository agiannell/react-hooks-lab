import { Switch, Route } from 'react-router-dom';
import CharacterInfo from './Components/CharacterInfo';
import CharacterList from './Components/CharacterList';

export default (
    <Switch>
        <Route exact path='/' component={ CharacterList } />
        <Route path='/character/:tail' component={ CharacterInfo } />
    </Switch>
)
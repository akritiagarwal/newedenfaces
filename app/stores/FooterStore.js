import alt from '../alt';
import FooterActions  from '../actions/FooterActions';


class FooterStore{
    constructor(){
        this.bindActions(FooterActions);
        this.characters = [];
    }

    onGetTopcharactersSuccess(data){
        this.characters = data.slice(0,5);
    }

    onGetTopCharactersFail(jdXhr){
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}
export default alt.createStore(FooterStore)
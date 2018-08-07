<template>
    <div class="row">
        <div class="col-sm-12">
            <p>Please search for an uploaded name</p>
        </div>
        <div class="col-sm-6 form-group">
            <label for="searchField">Name</label>
            <input id="searchField" v-model="search_text" @change="search" type="text" class="form-control" placeholder="Enter a name to search...">
        </div>
        <div class="col-sm-6 form-group" >
            <b-list-group>
                <b-list-group-item button v-for="result in results" @click="selectPerson(result)">
                    {{result.name}}
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
import {PeopleService} from '../js/services';

export default {
    data: function(){
        return {
            search_text: null,
            results: []
        };
    },
    methods: {
        search: function() {
            var self = this;
            PeopleService.search(self.search_text)
            .then(function(response) {
                console.log(response);
                var length = (response.data.length <= 20 ? response.data.length : 20);
                self.results = response.data.splice(0, length);
            })
            .catch(function(error){
                console.log('FAILURE!!');
                console.log(error);
            });
        },
        selectPerson: function(person) {
            console.log(person);
        }
    }
}
</script>
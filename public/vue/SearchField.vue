<template>
    <div class="row">
        <div class="col-sm-12">
            <p>Please search for an uploaded name</p>
        </div>
        <div class="col-sm-6 form-group">
            <label for="searchField">Name</label>
            <input id="searchField" v-model="search_text" type="text" class="form-control" placeholder="Enter a name to search...">
        </div>
        <div class="col-sm-3 form-group" >
            <b-list-group>
                <b-list-group-item button v-for="result in results_first_half" @click="selectPerson(result)">
                    {{result.name}}
                </b-list-group-item>
            </b-list-group>
        </div>
        <div class="col-sm-3 form-group" >
            <b-list-group>
                <b-list-group-item button v-for="result in results_last_half" @click="selectPerson(result)">
                    {{result.name}}
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
import {PeopleService} from '../js/services';

import {EventBus} from '../../webpackapp.js';

export default {
    data: function(){
        return {
            search_text: null,
            people_search_results: [],
            result_limit: 20
        };
    },
    computed: {
        result_limit_half: function() {
            return this.result_limit / 2;
        },
        results_first_half: function() {
            return this.people_search_results.slice(0, this.result_limit_half);
        },
        results_last_half: function() {
            return this.people_search_results.slice(this.result_limit_half, this.result_limit);
        }
    },
    watch: {
        search_text: function(val, oldVal) {
            if (val !== oldVal) {
                this.search();
            }
        }
    },
    methods: {
        search: function() {
            var self = this;
            PeopleService.search(self.search_text)
            .then(function(response) {
                var length = (response.data.length <= self.result_limit ? response.data.length : self.result_limit);
                self.people_search_results = response.data.slice(0, length);
            })
            .catch(function(error){
                console.log('FAILURE!!');
            });
        },
        selectPerson: function(person) {
            EventBus.$emit('set-selected-person', person);
            EventBus.$emit('show-modal', 'selected-person-info-modal');
        }
    }
}
</script>
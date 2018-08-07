<template>
    <div class="row">
        <div class="col-sm-12" align="center">
            <p>Currently {{progress_step}}...</p>
            <b-progress :value="progress_percentage" :max="100" :variant="variant_class" show-progress animated>
            </b-progress>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "progress_percentage",
        "progress_step"
    ],
    calculated: {
        variant_class: function() {
            if(this.progress_step === "Uploading file") {
                return "warning";
            } else {
                return "success";
            }
        }
    }
}
</script>
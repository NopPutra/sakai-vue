<template>
    <div>
        <Dialog 
            header="Product Details"
            v-model:visible="productDialogV2"  
            :style="{width: '450px'}"  
            :modal="true" class="p-fluid"
        >    
           <div class="field">
                <label for="code">Code</label>
                <InputText id="code" />
            </div>
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="getProduct.name" required="true" />
                <small class="p-error" v-if="submitted">Name is required.</small>
            </div>
            <div class="field">
                <label for="price">Price</label>
                <InputText id="price" />
            </div>
            <div class="field">
                <label for="category">Category</label>
                <v-select id="category" v-model="proCategory" :options="getProCategories" label="category"></v-select>
            </div>
            <!-- <div class="field">
                <label for="category">Category</label>
                <InputText id="category" />
            </div> -->

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
            </template>
        </Dialog>
    </div>
</template>
<script>
export default {
    props:{
        productDialog: Boolean
    },
    emits:["onClose"],
    data() {
        return {
            productDialogV2: false,
            proCategory: null,
            getProduct: {},
            submitted: false
        }
    },
    // created() {
    //     console.log(this.$store.getters['products/getProCategories'])
    // },
    methods: {
        saveProduct(){
            this.submitted = true;
        },
        hideDialog() {
            this.productDialogV2 = false;
        },
    },
    computed: {
        getProCategories() {
            return this.$store.getters['products/getProCategories'];
        }
    },
    watch:{
        productDialog(data){
            this.productDialogV2 = data;
        },
        productDialogV2(data){
            if(!data){
                this.$emit("onClose")
            }
        }
    }
}
</script>
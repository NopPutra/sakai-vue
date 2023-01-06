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
                <InputText id="name" />
            </div>
            <div class="field">
                <label for="price">Price</label>
                <InputText id="price" />
            </div>
            <div class="field">
                <label for="category">Category</label>
                <InputText id="category" />
            </div>

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
        editProductDialog: Boolean
    },
    emits:["onClose"],
    data() {
        return {
            productDialogV2: false,
        }
    },
    methods: {
        saveProduct(){

        },
        hideDialog() {
            this.productDialogV2 = false;
        }
    },
    watch:{
        editProductDialog(data){
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
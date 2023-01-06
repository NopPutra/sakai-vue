<template>
    <div>
        <div class="cad">
            <Toolbar class="mb-4">
                <template #start>
                    <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <!-- <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                    <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                </template> -->
            </Toolbar>

            <DataTable 
                    :value="getProduct" 
                    v-model:selection="selectedProducts" 
                    dataKey="id" :paginator="true" :rows="10" 
                    :rowsPerPageOptions="[5,10,15]" 
                    responsiveLayout="Scroll">

                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
						<h5 class="mb-2 md:m-0 p-as-md-center">Lists Products</h5>
					</div>
                </template>
                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="code" header="Code" style="min-width:12rem"></Column>
                <Column field="name" header="Name" style="min-width:16rem"></Column>
                <Column field="price" header="Price" style="min-width:16rem"></Column>
                <Column field="category" header="Category" style="min-width:16rem"></Column>
                <Column header="Actions" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="getProduct">Are you sure you want to delete <b>{{ getProduct.name }}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="getProduct">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
            </template>
        </Dialog>

        <CreateProduct :productDialog="productDialog" @onClose="closeDialog" />
        <EditProduct :editProductDialog="editProductDialog" @onClose="closeEditDialog" />
        
    </div>
</template>

<script>
import CreateProduct from './CreateProduct.vue';
import EditProduct from './EditProduct.vue';
// import { mapGetters } from "vuex";

export default {
    components: {
        CreateProduct,
        EditProduct
    },
    data() {
        return {
            productDialog: false,
            editProductDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            selectedProducts: null,
        }
    },
    // created(){
    //     console.log(this.$store.getters["products/getProduct"])
    // },
    computed:{
        // ...mapGetters({
        //     getProduct:"products/getProduct",
        // }) 

        getProduct() {
            return this.$store.getters['products/getProduct']
        }, 
    },
    methods: {
        closeDialog(){
            this.productDialog = false;
        },
        openNew() {
            this.productDialog = true;
            // this.editProductDialog = true;
        },
        closeEditDialog() {
            this.editProductDialog = false;
        },
        editProduct() {
            this.editProductDialog = true;
        },
        confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },
        confirmDeleteProduct() {
            this.deleteProductDialog = true;
        }
    }
}
</script>
<script setup>
    import { onMounted, ref } from 'vue';

    const name = ref('');
    const msg = ref('');

    const emit = defineEmits(['update:name'])

    onMounted(
        () => {
            this.name = emit.name;
        }
    )
    msg = `Hello, ${name}`;

    defineExpose(
        msg
    );

</script>
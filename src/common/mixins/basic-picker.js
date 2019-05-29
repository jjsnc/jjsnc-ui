const DEFAULT_KEYS = {
    value: 'value',
    text: 'text',
    order: 'order'
}

export default {
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        selectedIndex: {
            type: Array,
            default() {
                []
            }
        },
        alias: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        valueKey() {
            return this.alias.value || DEFAULT_KEYS.value;
        },
        textKey() {
            return this.alias.text || DEFAULT_KEYS.text;
        },
        orderKey() {
            return DEFAULT_KEYS.order
        },
        merge() {
            return [this.data, this.selectedIndex]
        }
    },
    watch: {
        // Merge the watch handlers of data and selectedIndex into one.
        merge(newValue) {
            this.setData(newValue[0], newValue[1]);
        }
    }
}

export default {
    jsonToFormData(data) {
        const formData = new FormData();
        this.buildFormData(formData, data);
        return formData;
    },

    buildFormData(formData, data, parentKey) {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = data == null ? '' : data;
            formData.append(parentKey, value);
        }
    }
}
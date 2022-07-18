<template>
    <div class="kit-text-field" data-cy="input-wrapper" v-on="$listeners">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'TextField'
    };
</script>

<style scoped>
    :deep(textarea),
    :deep(input) {
        background: transparent;
        border: 0;
        color: inherit;
        cursor: inherit;
        font-size: inherit;
        outline: none;
        line-height: inherit;
        width: 100%;
        padding: 6px;
        letter-spacing: inherit;
        box-sizing: border-box;
        margin: 0;
    }

    .kit-text-field[compact] > input,
    .kit-text-field[compact] > textarea {
        padding: 0;
    }

    textarea {
        resize: vertical;
    }

    textarea::-ms-clear,
    input::-ms-clear {
        display: none;
    }

    textarea::-moz-placeholder,
    input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        opacity: 1;
        color: #7a869a;
    }

    input::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #7a869a;
    }

    textarea:-moz-placeholder,
    input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #7a869a;
        opacity: 1;
    }

    .kit-text-field {
        align-items: center;
        border: solid 2px #dfe1e6;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 0;
        color: #091e42;
        display: flex;
        flex: 1 0 auto;
        position: relative;
        justify-content: space-between;
        max-width: 100%;
        overflow: hidden;
        transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        word-wrap: break-word;
        background-color: #fafbfc;
    }

    .kit-text-field[select]:not([is-loading]) {
        background-color: #f4f5f7;
        border-color: #f4f5f7;
    }

    .kit-text-field[editable]:not([is-focused]) {
        border: transparent;
        background-color: inherit;
    }

    .kit-text-field[should-fit-container] {
        display: flex;
    }

    .kit-text-field[disabled] {
        pointer-events: none;
        background-color: #f4f5f7;
        color: #a5adba;
    }

    .kit-text-field[disabled] input::placeholder {
        color: #a5adba;
    }

    .kit-text-field:hover {
        background-color: #ebecf0;
    }

    .kit-text-field[select]:not([is-focused]):not([disabled]):hover {
        background-color: #ebecf0;
        border-color: #ebecf0;
        cursor: pointer;
    }

    .kit-text-field[is-focused]:not([disabled]):not([is-loading]) {
        background-color: #ffffff;
        border-color: #4c9aff;
    }

    .kit-text-field[is-invalid]:not([disabled]):not([is-loading]) {
        border-color: #de350b;
        animation: shake 0.5s linear;
    }

    .kit-text-field[is-loading] {
        background-color: white;
        animation: loading 1s linear infinite;
        background-image: linear-gradient(
            90deg,
            rgba(9, 30, 66, 0.08) 30%,
            rgba(9, 30, 66, 0.16) 50%,
            rgba(9, 30, 66, 0.08) 70%
        );
        background-size: 300%;
        background-position: 0% 0%;
        pointer-events: none;
    }

    @keyframes loading {
        0% {
            background-position: 100% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    @keyframes shake {
        8%,
        41% {
            transform: translateX(-10px);
        }
        25%,
        58% {
            transform: translateX(10px);
        }
        75% {
            transform: translateX(-5px);
        }
        92% {
            transform: translateX(5px);
        }
        0%,
        100% {
            transform: translateX(0);
        }
    }
</style>

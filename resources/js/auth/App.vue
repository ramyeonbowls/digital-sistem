<template>
    <div class="flex h-screen items-center justify-center">
        <div class="card mx-6 flex w-full sm:mx-auto sm:max-w-sm">
            <div class="card-body gap-4">
                <h5 class="card-title mb-2.5 text-center">Login Account</h5>
                <div class="relative w-full">
                    <input type="text" placeholder="Email" class="input input-floating peer" id="email" v-model="form.field.email" />
                    <label class="input-floating-label" for="email">Email</label>
                </div>
                <div class="input-group max-w-sm">
                    <div class="relative w-full">
                        <input id="password" type="password" class="input input-floating peer" placeholder="Enter password" v-model="form.field.password" />
                        <label class="input-floating-label" for="password">Password</label>
                    </div>
                    <span class="input-group-text">
                        <button type="button" data-toggle-password='{ "target": "#password" }' class="block" id="toggle-password-event" aria-label="password toggle">
                            <span class="icon-[tabler--eye] hidden size-5 flex-shrink-0 text-base-content/80 password-active:block"></span>
                            <span class="icon-[tabler--eye-off] block size-5 flex-shrink-0 text-base-content/80 password-active:hidden"></span>
                        </button>
                    </span>
                </div>
                <div class="felx card-actions justify-center">
                    <button class="btn btn-primary w-full">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { HSTogglePassword } from 'flyonui/flyonui'

export default {
    data() {
        return {
            form: {
                field: {
                    email: '',
                    password: '',
                },
            },
        }
    },
    mounted() {
        window.addEventListener('load', function () {
            const el = HSTogglePassword.getInstance('#toggle-password-event')
        })
    },
}
</script>

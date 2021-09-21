# from django.contrib import admin
# from django.contrib.auth import admin as auth_admin
# from django.contrib.auth import get_user_model

# from users.forms import UserChangeForm, UserCreationForm

# User = get_user_model()


# @admin.register(User)
# class UserAdmin(auth_admin.UserAdmin):

#     form = UserChangeForm
#     add_form = UserCreationForm
#     fieldsets = (("User", {"fields": ("name",)}),) + auth_admin.UserAdmin.fieldsets
#     list_display = ["username", "name", "is_superuser"]
#     search_fields = ["name"]

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _
from users import models


class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['phone', 'name', 'email']
    fieldsets = (
        (None, {'fields': ('phone', 'email', 'password')}),
        (_('Personal info'), {'fields': ('name',)}),
        (
            _('Permissions'),
            {'fields': ('is_active', 'is_staff', 'is_superuser')}
        ),
        (_('Important Dates'), {'fields': ('last_login',)})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('phone', 'password1', 'password2')
        }),
    )


admin.site.register(models.User, UserAdmin)

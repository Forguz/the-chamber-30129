# from django.contrib.auth import get_user_model, forms
# from django.core.exceptions import ValidationError
# from django.utils.translation import ugettext_lazy as _

# User = get_user_model()


# class UserChangeForm(forms.UserChangeForm):
#     class Meta(forms.UserChangeForm.Meta):
#         model = User


# class UserCreationForm(forms.UserCreationForm):

#     error_message = forms.UserCreationForm.error_messages.update(
#         {"duplicate_username": _("This username has already been taken.")}
#     )

#     class Meta(forms.UserCreationForm.Meta):
#         model = User

#     def clean_phone(self):
#         phone = self.cleaned_data["phone"]

#         try:
#             User.objects.get(phone=phone)
#         except User.DoesNotExist:
#             return phone

#         raise ValidationError(self.error_messages["duplicate_username"])

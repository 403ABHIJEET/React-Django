from django.urls import path
from .views import StudentListCreateAPIView, StudentDetailAPIView

urlpatterns = [
    path('student/', StudentListCreateAPIView.as_view(), name='student-list-create'),
    path('student/<int:pk>/', StudentDetailAPIView.as_view(), name='student-detail'),
]

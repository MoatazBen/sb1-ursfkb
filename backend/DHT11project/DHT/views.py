from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from django.utils import timezone
from datetime import timedelta
from django.contrib.auth.models import User
from .models import DHT11Reading
from .serializers import DHT11ReadingSerializer, UserSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "User created successfully",
            "user": serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DHT11ViewSet(viewsets.ModelViewSet):
    queryset = DHT11Reading.objects.all()
    serializer_class = DHT11ReadingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        range_param = self.request.query_params.get('range', '24h')
        now = timezone.now()
        
        if range_param == '7d':
            start_time = now - timedelta(days=7)
        elif range_param == '30d':
            start_time = now - timedelta(days=30)
        else:  # 24h default
            start_time = now - timedelta(hours=24)
            
        return DHT11Reading.objects.filter(timestamp__gte=start_time)

    @action(detail=False, methods=['get'])
    def temperature(self, request):
        readings = self.get_queryset()
        data = [{'timestamp': reading.timestamp, 'value': reading.temperature} 
                for reading in readings]
        return Response(data)

    @action(detail=False, methods=['get'])
    def humidity(self, request):
        readings = self.get_queryset()
        data = [{'timestamp': reading.timestamp, 'value': reading.humidity} 
                for reading in readings]
        return Response(data)
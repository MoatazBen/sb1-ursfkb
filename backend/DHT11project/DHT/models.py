from django.db import models
from django.utils import timezone

class DHT11Reading(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"Temp: {self.temperature}°C, Humidity: {self.humidity}% at {self.timestamp}"
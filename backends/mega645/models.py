from django.db import models

class Mega645(models.Model):
    jackpot = models.CharField(max_length=30)
    ngayQuay = models.CharField(max_length=30)
    so1 = models.CharField(max_length=2)
    so2 = models.CharField(max_length=2)
    so3 = models.CharField(max_length=2)
    so4 = models.CharField(max_length=2)
    so5 = models.CharField(max_length=2)
    so6 = models.CharField(max_length=2)

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ['-id']


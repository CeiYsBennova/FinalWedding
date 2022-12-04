from django.db import models

class Max3DPro(models.Model):
    ngayQuay = models.CharField(max_length=20)
    giaiDacBiet1 = models.IntegerField()
    giaiDacBiet2 = models.IntegerField()
    giaiNhat1 = models.IntegerField()
    giaiNhat2 = models.IntegerField()
    giaiNhat3 = models.IntegerField()
    giaiNhat4 = models.IntegerField()
    giaiNhi1 = models.IntegerField()
    giaiNhi2 = models.IntegerField()
    giaiNhi3 = models.IntegerField()
    giaiNhi4 = models.IntegerField()
    giaiNhi5 = models.IntegerField()
    giaiNhi6 = models.IntegerField()
    giaiNhi7 = models.IntegerField()
    giaiNhi8 = models.IntegerField()
    giaiBa1 = models.IntegerField()
    giaiBa2 = models.IntegerField()
    giaiBa3 = models.IntegerField()
    giaiBa4 = models.IntegerField()
    giaiBa5 = models.IntegerField()
    giaiBa6 = models.IntegerField()
    giaiBa7 = models.IntegerField()
    giaiBa8 = models.IntegerField()

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ['-id']